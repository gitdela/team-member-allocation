const Header = ({ selectedTeam, teamMemberCount }) => {
  const formattedSelectedTeam = selectedTeam.replace(/([A-Z])/g, ' $1').trim();

  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-9'>
          <h1>Team Member Allocation</h1>
          <h3>
            {formattedSelectedTeam} has {teamMemberCount} members
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
