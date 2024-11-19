import random
import time

def getToken():
    random.seed(time.time())
    return hash(random.randbytes(random.randint(1,6)))

