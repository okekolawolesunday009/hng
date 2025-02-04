import math
from flask import Flask, request, jsonify, abort

app = Flask(__name__)

@app.route('/classify-number', methods=['GET'], strict_slashes=False)
def classify_number():
    # Fetch 'number' from query parameters
    number = request.args.get('number')

    # Validate the number parameter
    if number is None:
        return jsonify({"number": None, "error": True, "message": "Missing number parameter"}), 400

    try:
        number = int(number)
    except ValueError:
        return jsonify({"number": number, "error": True, "message": "Must be a valid number"}), 400

    # Process the number classification
    response = classify_number_logic(number)
    return jsonify(response)


# --- Number Classification Logic ---
def is_prime(n: int) -> bool:
    if n <= 1:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def is_perfect(n: int) -> bool:
    divisors = [i for i in range(1, n) if n % i == 0]
    return sum(divisors) == n

def digit_sum(n: int) -> int:
    return sum(int(digit) for digit in str(n))

def is_armstrong(n: int) -> bool:
    digits = [int(digit) for digit in str(n)]
    power = len(digits)
    return sum(digit ** power for digit in digits) == n

def classify_number_logic(number):
    properties = []
    if is_armstrong(number):
        properties.append("armstrong")
    if is_prime(number):
        properties.append("prime")
    if is_perfect(number):
        properties.append("perfect")
    if number % 2 != 0:
        properties.append("odd")
    else:
        properties.append("even")

    response = {
        "number": number,
        "is_prime": is_prime(number),
        "is_perfect": is_perfect(number),
        "properties": properties,
        "digit_sum": digit_sum(number),
        "fun_fact": f"{number} is an Armstrong number because {digit_sum(number)}"
        if is_armstrong(number) else None
    }
    return response

if __name__ == '__main__':
    app.run(debug=True)
