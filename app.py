from flask import Flask, render_template

app = Flask(__name__)


# ================= HOME =================

@app.route("/")
def home():
    return render_template("index.html")


# ================= FEATURES =================

@app.route("/features")
def features():
    return render_template("features.html")


# ================= AI CALORIE PREDICTION =================

@app.route("/calories")
def calories():
    return render_template("calories.html")


# ================= MEAL DIARY =================

@app.route("/meal-diary")
def meal_diary():
    return render_template("meal-diary.html")


# ================= NUTRITION ANALYTICS =================

@app.route("/analytics")
def analytics():
    return render_template("analytics.html")


# ================= FOOD ANALYSIS =================

@app.route("/food-analysis")
def food_analysis():
    return render_template("food-analysis.html")


# ================= GOAL TRACKING =================

@app.route("/goal")
def goal():
    return render_template("goal.html")


# ================= ABOUT =================

@app.route("/about")
def about():
    return render_template("About.html")


# ================= CONTACT =================

@app.route("/contact")
def contact():
    return render_template("contact.html")


# ================= PREDICTION =================

@app.route("/predict")
def predict():
    return render_template("predict.html")


# ================= RUN APPLICATION =================

if __name__ == "__main__":
    app.run(debug=True)