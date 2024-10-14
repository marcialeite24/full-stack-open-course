const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
      <p>{props.p} {props.e}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part p={props.course.parts[0].name} e={props.course.parts[0].exercises} />
      <Part p={props.course.parts[1].name} e={props.course.parts[1].exercises} />
      <Part p={props.course.parts[2].name} e={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  let total = 0;
  return (
    <>
      { props.course.parts.map( i => {
          total += i.exercises;
      })

      }
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

export default App