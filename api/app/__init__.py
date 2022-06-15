from flask import Flask
from mecademicpy.robot import Robot
import logging

app = Flask(__name__)
#logging.getLogger('werkzeug').disabled = True
robotList = []
#robot.Connect(monitor_mode = True)

from app import routes
