from django import template

register = template.Library()

def get(value, arg):
    return value.get(arg)
def index(value, arg):
    return value[arg]
def rem(value, arg):
    return value%arg

register.filter("get", get)
register.filter("rem", rem)
register.filter("index", index)
