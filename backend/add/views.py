from rest_framework.response import Response
from rest_framework.decorators import api_view
import sqlite3 as sql

@api_view(['GET'])
def getData(request, username='alex', password='da', role='user'):
    print('test')
    con = sql.connect('../db/db.db')
    cur = con.cursor()
    execu = "INSERT INTO users VALUES ('{}','{}','{}')".format(username, password, role)
    print(execu)
    cur.execute(
            execu
    )
    con.commit()
    return Response({'response':'ok'})


