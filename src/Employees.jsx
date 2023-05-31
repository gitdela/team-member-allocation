import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({
  employees,
  selectedTeam,
  handleTeamChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6 text-center'>
          <select
            className='form-select form-select-lg'
            value={selectedTeam}
            onChange={handleTeamChange}
          >
            <option value='TeamA'>Team A</option>
            <option value='TeamB'>Team B</option>
            <option value='TeamC'>Team C</option>
            <option value='TeamD'>Team D</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-9 card-collection'>
          {/* <div className='card-collection'> */}
          {employees.map(({ id, fullName, designation, gender, teamName }) => (
            // when you map in react, it must return just a single element so put everything inside a single div
            <div
              key={id}
              id={id}
              className={`card m-2 ${
                teamName === selectedTeam ? 'standout' : ''
              }`}
              style={{ cursor: 'pointer' }}
              onClick={handleEmployeeCardClick}
            >
              <img
                src={gender === 'male' ? maleProfile : femaleProfile}
                className='card-img-top'
                alt='profile'
              />
              <div className='card-body'>
                <h5 className='class-title'>Full Name: {fullName}</h5>
                <p className='card-text'>
                  <b>Designation: </b>
                  {designation}
                </p>
              </div>
            </div>
          ))}
          {/* </div>s */}
        </div>
      </div>
    </main>
  );
};

export default Employees;
