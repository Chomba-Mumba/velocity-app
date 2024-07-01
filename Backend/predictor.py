import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV file
file_path = 'Backend/RepOne_Data_Export.csv'
data = pd.read_csv(file_path)

# Drop columns with all NaN values
data_cleaned = data.dropna(axis=1, how='all')

def plot_data(exercise_name, data=data_cleaned):
    exercise_data = data[data['Exercise'] == exercise_name]
    
    if exercise_data.empty:
        print(f"No data found for exercise: {exercise_name}")
        return
    
    avg_velocity_data = exercise_data.groupby('Weight')['Concentric Avg Velocity (m/s)'].mean().reset_index()
    max_velocity_data = exercise_data.loc[exercise_data.groupby('Weight')['Concentric Avg Velocity (m/s)'].idxmax()]

    plt.figure(figsize=(10, 6))
    plt.scatter(avg_velocity_data['Weight'], avg_velocity_data['Concentric Avg Velocity (m/s)'], label='Average Velocity', color='blue')
    plt.scatter(max_velocity_data['Weight'], max_velocity_data['Concentric Avg Velocity (m/s)'], label='Max Velocity', color='red')
    plt.xlabel('Weight (kg)')
    plt.ylabel('Concentric Avg Velocity (m/s)')
    plt.title(f'Weight vs Concentric Avg Velocity for {exercise_name}')
    plt.legend()
    plt.show()

def init_rpe_model(exercise_name):
    # Filter the DataFrame to only include rows with non-null RPE values
    rpe_filtered_data = data_cleaned.dropna(subset=['Set RPE'])

    # Create a new DataFrame with the relevant columns
    rpe_data = rpe_filtered_data[['Concentric Avg Velocity (m/s)', 'Set RPE']].rename(columns={'Concentric Avg Velocity (m/s)': 'Speed', 'Set RPE': 'RPE'})

    exercise_data = rpe_data[rpe_data['Exercise'] == exercise_name]

    if exercise_data.empty:
        print(f"No data found for exercise: {exercise_name}")
        return

    print(rpe_data.head())
    

# Example usage:
# plot_data('squat')
init_rpe_model('squat')
