const Total = ({ parts }) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  
    return <p>Number of exercises: {totalExercises}</p>;
  };
  
  export default Total;
//used reduce() function to sum up all the exercises values across the array of parts  