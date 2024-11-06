import pandas as pd
from sklearn.linear_model import LinearRegression
import sys

def predict_popularity():
    # Sample booking data (normally, you'd query this from your database)
    data = {
        'date': [1, 2, 3, 4, 5],
        'location': [1, 2, 3, 4, 5],
        'event_type': [1, 2, 3, 4, 5],
        'popularity_score': [50, 60, 70, 80, 90]
    }

    df = pd.DataFrame(data)

    # Features and target
    X = df[['date', 'location', 'event_type']]
    y = df['popularity_score']

    # Train the linear regression model
    model = LinearRegression()
    model.fit(X, y)

    # Predict popularity for new data (input passed via arguments or static data)
    prediction = model.predict([[6, 6, 6]])  # Dummy future event data
    
    # Return the prediction
    return prediction

if __name__ == "__main__":
    result = predict_popularity()
    print(result[0])  # Output the result
