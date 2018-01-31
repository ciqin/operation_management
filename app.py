# coding=utf-8
import tornado.web
import tornado.httpserver
import tornado.ioloop
import tornado.options
import sqlite3
import json   
# 检查登录路由          
class InspectgetHandler(tornado.web.RequestHandler):
    def get(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        email = self.get_argument('email')
        password = self.get_argument('password')
        conn = sqlite3.connect('test.db')
        cursor = conn.cursor()
        cursor.execute('select * from user where name=\''+email+'\' and password=\''+password+'\'')
        values = cursor.fetchall()
        if values:
            self.write('ok')
        else:
            self.write('err')    
        cursor.close()
        conn.close()
class EnrollgetHandler(tornado.web.RequestHandler):
    def get(self):
        # 设置跨域请求头
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        email = self.get_argument("email")
        print(email)
        password = self.get_argument("password")
        print(password)
        conn = sqlite3.connect('test.db')
        cursor = conn.cursor()
        cursor.execute('insert into user (name,password) values (\''+email+'\',\''+password+'\')')
        values = cursor.fetchall()
        self.write('ok')    
        cursor.close()
        conn.commit()
        conn.close()
# 配置路由
class Application(tornado.web.Application):
	def __init__(self):
		handlers = [
            (r'/load',InspectgetHandler),
            (r'/enroll',EnrollgetHandler)
		]
		settings = {
			'template_path': 'pages',
			'static_path': 'static'
		}
		tornado.web.Application.__init__(self, handlers, **settings)      
if __name__ == '__main__':
	tornado.options.parse_command_line()
	app = Application()
	server = tornado.httpserver.HTTPServer(app)
	server.listen(8011)
	tornado.ioloop.IOLoop.instance().start()     