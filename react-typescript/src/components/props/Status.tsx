type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
  let message
  if (props.status === 'loading') {
    message = 'Loading...'
  }
  else if (props.status === 'success') {
    message = 'data fetched'
  } 
  else if (props.status === 'error') {
    message = 'Something went wrong'
  }

  return <h2>Status - {message}</h2>
}
