from routes.variables.productos import src


def iniapp(app):
    app.include_routes(src)
