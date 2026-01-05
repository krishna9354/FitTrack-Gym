import "./workouts.css";
import { useState } from "react";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";

/* ================= DATA ================= */

const WORKOUTS = [
  /* -------- BEGINNER -------- */
  {
    level: "Beginner",
    title: "Beginner Full Body",
    trainer: "Alex Martinez",
    exercises: [
      "Push-ups – 3×10",
      "Bodyweight Squats – 3×12",
      "Plank – 3×30 sec",
      "Jumping Jacks – 3×20",
    ],
  },
  {
    level: "Beginner",
    title: "Beginner Cardio",
    trainer: "David Brown",
    exercises: [
      "High Knees – 3×20",
      "Mountain Climbers – 3×15",
      "Jump Rope – 3×30 sec",
      "Butt Kicks – 3×20",
    ],
  },
  {
    level: "Beginner",
    title: "Beginner Core",
    trainer: "Jessica Lee",
    exercises: [
      "Crunches – 3×15",
      "Leg Raises – 3×10",
      "Russian Twists – 3×20",
      "Plank – 3×30 sec",
    ],
  },
  {
    level: "Beginner",
    title: "Beginner Upper Body",
    trainer: "Alex Martinez",
    exercises: [
      "Wall Push-ups – 3×12",
      "Resistance Rows – 3×12",
      "Shoulder Taps – 3×20",
      "Arm Circles – 3×30 sec",
    ],
  },
  {
    level: "Beginner",
    title: "Beginner Lower Body",
    trainer: "David Brown",
    exercises: [
      "Bodyweight Lunges – 3×10",
      "Glute Bridges – 3×15",
      "Calf Raises – 3×20",
      "Wall Sit – 3×30 sec",
    ],
  },
  {
    level: "Beginner",
    title: "Beginner Mobility",
    trainer: "Jessica Lee",
    exercises: [
      "Cat-Cow – 3×10",
      "Hip Openers – 3×30 sec",
      "Neck Rolls – 3×10",
      "Hamstring Stretch – 3×30 sec",
    ],
  },

  /* -------- INTERMEDIATE -------- */
  {
    level: "Intermediate",
    title: "Upper Body Strength",
    trainer: "Alex Martinez",
    exercises: [
      "Bench Press – 4×8",
      "Pull-ups – 4×6",
      "Shoulder Press – 3×10",
      "Bicep Curls – 3×12",
      "Tricep Dips – 3×12",
    ],
  },
  {
    level: "Intermediate",
    title: "HIIT Burn",
    trainer: "David Brown",
    exercises: [
      "Burpees – 4×12",
      "Jump Squats – 4×15",
      "Mountain Climbers – 4×20",
      "Plank Jacks – 3×20",
    ],
  },
  {
    level: "Intermediate",
    title: "Core Stability",
    trainer: "Jessica Lee",
    exercises: [
      "Hanging Leg Raises – 3×10",
      "Plank – 3×45 sec",
      "Bicycle Crunch – 3×20",
      "Side Plank – 3×30 sec",
    ],
  },
  {
    level: "Intermediate",
    title: "Lower Body Power",
    trainer: "Alex Martinez",
    exercises: [
      "Barbell Squats – 4×8",
      "Walking Lunges – 3×20",
      "Romanian Deadlift – 3×10",
      "Calf Raises – 4×15",
    ],
  },
  {
    level: "Intermediate",
    title: "Functional Training",
    trainer: "David Brown",
    exercises: [
      "Kettlebell Swings – 4×20",
      "Box Step-ups – 3×12",
      "Medicine Ball Slams – 3×15",
      "Farmer Walk – 3×30 m",
    ],
  },
  {
    level: "Intermediate",
    title: "Yoga Strength",
    trainer: "Jessica Lee",
    exercises: [
      "Chaturanga – 3×10",
      "Warrior Flow – 3×30 sec",
      "Boat Pose – 3×30 sec",
      "Crow Pose – 3×20 sec",
    ],
  },

  /* -------- ADVANCED -------- */
  {
    level: "Advanced",
    title: "Advanced Strength",
    trainer: "Alex Martinez",
    exercises: [
      "Deadlift – 5×5",
      "Barbell Squat – 5×5",
      "Bench Press – 5×5",
      "Pull-ups – 4×10",
      "Overhead Press – 4×8",
    ],
  },
  {
    level: "Advanced",
    title: "Advanced HIIT",
    trainer: "David Brown",
    exercises: [
      "Burpees – 5×15",
      "Box Jumps – 5×12",
      "Battle Ropes – 4×30 sec",
      "Sprint Intervals – 5 rounds",
    ],
  },
  {
    level: "Advanced",
    title: "Athletic Conditioning",
    trainer: "Jessica Lee",
    exercises: [
      "Power Cleans – 4×6",
      "Kettlebell Swings – 4×20",
      "Farmer Walk – 4×40 m",
      "Plank Hold – 3×1 min",
    ],
  },
  {
    level: "Advanced",
    title: "Olympic Lifting",
    trainer: "Alex Martinez",
    exercises: [
      "Snatch – 5×3",
      "Clean & Jerk – 5×3",
      "Front Squat – 4×6",
      "Overhead Squat – 4×5",
    ],
  },
  {
    level: "Advanced",
    title: "Endurance Circuit",
    trainer: "David Brown",
    exercises: [
      "Rowing – 5×500 m",
      "Wall Balls – 4×20",
      "Double Unders – 4×40",
      "Burpee Pull-ups – 4×12",
    ],
  },
  {
    level: "Advanced",
    title: "Elite Core",
    trainer: "Jessica Lee",
    exercises: [
      "Dragon Flags – 4×6",
      "Hanging Toes to Bar – 4×12",
      "L-Sit Hold – 4×30 sec",
      "Windshield Wipers – 4×10",
    ],
  },
];

/* ================= COMPONENT ================= */

function Workouts() {
  const [filter, setFilter] = useState("All");

  const filteredWorkouts =
    filter === "All"
      ? WORKOUTS
      : WORKOUTS.filter((w) => w.level === filter);

  return (
    <>
      <LoginNavbar />

      <main className="container workouts-page">
        <section className="workouts-intro">
          <h2>Workout Programs</h2>
          <p>Sort workouts by difficulty level</p>
        </section>

        {/* ===== SORT BUTTONS ===== */}
        <section className="workout-filters">
          {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
            <button
              key={lvl}
              className={`badge ${filter === lvl ? "active" : ""}`}
              onClick={() => setFilter(lvl)}
            >
              {lvl}
            </button>
          ))}
        </section>

        {/* ===== WORKOUT CARDS ===== */}
        <section className="grid-3">
          {filteredWorkouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </section>

        <footer className="footer">© 2025 FitTrack</footer>
      </main>
    </>
  );
}

/* ================= CARD ================= */

function WorkoutCard({ workout }) {
  return (
    <div className="workout card">
      <div className="meta">
        <h3>{workout.title}</h3>
        <p className="small">
          {workout.level} • Trainer: {workout.trainer}
        </p>

        <ul className="exercise-list">
          {workout.exercises.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>

        <button className="join-btn full-btn">Start Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
