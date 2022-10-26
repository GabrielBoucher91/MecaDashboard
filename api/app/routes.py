from app import app, robotList
from flask import request
from mecademicpy.robot import Robot

@app.route('/')
def index():
    print(robotList.keys())
    return {"keys":list(robotList.keys())}

@app.route('/registerRobot', methods=['POST'])
def registerRobot():
    robotList[request.json['ip']] = Robot()
    try:
        robotList[request.json['ip']].Connect(request.json['ip'], monitor_mode=True, timeout=0.01)
        print(robotList)
        resp = {"Connection": True}
    except:
        resp = {"Connection": False}
    return resp

@app.route('/removeRobot', methods=['POST'])
def removeRobot():
    print('This is the IP to remove: ', request.json['ip'])
    try:
        robotList[request.json['ip']].Disconnect()
        print("Disconnected")
        robotList.pop(request.json['ip'])
        resp = {"Disconnection": True}
    except:
        print("Uh Oh")
        resp = {"Disconnection": False}
    return resp
    


@app.route('/getStatus')
def getStatus():
    args = request.args['ip']
    robotStatus = robotList[args].GetStatusRobot()
    return({"Activated": robotStatus.activation_state,
            "Homed": robotStatus.homing_state,
            "Error": robotStatus.error_status})


@app.route('/moveJoints', methods=['POST'])
def moveJoints():
    print(request.json)
    return request.json