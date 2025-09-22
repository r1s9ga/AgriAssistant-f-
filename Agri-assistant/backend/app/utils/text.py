from datetime import datetime


IST = "+05:30"


def stamp():
	return datetime.now().strftime("%d-%b-%Y %H:%M") + " IST"