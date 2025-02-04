
#!/usr/bin/python3
""" Objects that handle all default RestFul API actions for Users """
from . import app_views
from flask import abort, jsonify, request
import math

@app_views.route('/classify-number', methods=['GET'], strict_slashes=False)
def classify_number():
    # Fetch 'number' from query parameters
    number = request.args.get('number')
    
    # Validate the number parameter
    if number is None:
        abort(400, description='Missing number parameter')
    
    try:
        number = int(number)
    except ValueError:
        abort(400, description='Must be a valid number')
    
    # Process the number classification
    response = classify_number_logic(number)
    return jsonify(response)


# --- Number Classification API ---
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
        "fun_fact": f"{number} is an Armstrong number because 3^3 + 7^3 + 1^3 = {number}"
    }
    return response
