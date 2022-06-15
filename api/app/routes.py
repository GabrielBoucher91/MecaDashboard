from app import app, robotList
from flask import request
from mecademicpy.robot import Robot

@app.route('/')
def index():
    return 'Mecademic'

@app.route('/registerRobot', methods=['POST'])
def registerRobot():
    print(request.json)
    return request.json


@app.route('/moveJoints', methods=['POST'])
def moveJoints():
    print(request.json)
    return request.json