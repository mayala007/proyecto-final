 from flask import Flask
 from flask_sqlalchemy import SQLAlchemy
 
 db = SQLAlchemy()
 
 def create_app():
    app= flask(__name__)
    app.config.from_object('config.config')
    
    
   db.init_app(app)
   
   with app.app_context():
    from . import 