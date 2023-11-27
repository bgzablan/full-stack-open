import Parts from './Parts'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Parts key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

export default Content
