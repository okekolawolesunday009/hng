#!/usr/bin/python3
""" Blueprint for API """

from .  import app_views
from flask import jsonify


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def status():
    return jsonify({"status": "OK"})
