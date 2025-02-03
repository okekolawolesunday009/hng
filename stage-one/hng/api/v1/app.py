#!/usr/bin/python3
from flask import Flask, render_template, make_response, jsonify
from flask_cors import CORS
from .views import app_views


app = Flask(__name__)
app.config['JSONIFY_PRETTPRINT_REGULAR'] = True
app.register_blueprint(app_views)
cors = CORS(app, resourCes={r"/*": {"origins":"*"}})


@app.errorhandler(404)
def not_found(error):
    "404"
    return make_response(jsonify({'error': "Not found"}), 404)

if __name__ == "__main__":
    host ='0.0.0.0'
    port = '5000'
    app.run(host=host, port=port, thread=True)
