const Header = ({ selectedTeam, teamMemberCount }) => {
  const formattedSelectedTeam = selectedTeam.replace(/([A-Z])/g, ' $1').trim();

  return (
    <header>
      <h1>Team Member Allocation</h1>
      <h3>
        {formattedSelectedTeam} has {teamMemberCount} members
      </h3>
    </header>
  );
};

export default Header;
