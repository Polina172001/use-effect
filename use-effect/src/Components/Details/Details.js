
const Details = ({info}) => {

  return (
    info ? (<div>
        <img src={info.avatar} alt='avatar' />
        <div>{info.name}</div>
        <div>{info.details.city}</div>
        <div>{info.details.company}</div>
        <div>{info.details.position}</div>
    </div>) : null
  );
};

export default Details;