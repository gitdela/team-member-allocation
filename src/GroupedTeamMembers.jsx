import { React, useState, useEffect } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];

    let teamAMembers = employees.filter(
      (employee) => employee.teamName === 'TeamA'
    );
    let teamA = {
      key: 1,
      team: 'TeamA',
      members: teamAMembers,
      collapsed: selectedTeam === 'TeamA' ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter(
      (employee) => employee.teamName === 'TeamB'
    );
    let teamB = {
      key: 2,
      team: 'TeamB',
      members: teamBMembers,
      collapsed: selectedTeam === 'TeamB' ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter(
      (employee) => employee.teamName === 'TeamC'
    );
    let teamC = {
      key: 3,
      team: 'TeamC',
      members: teamCMembers,
      collapsed: selectedTeam === 'TeamC' ? false : true,
    };
    teams.push(teamC);

    let teamDMembers = employees.filter(
      (employee) => employee.teamName === 'TeamD'
    );
    let teamD = {
      key: 4,
      team: 'TeamD',
      members: teamDMembers,
      collapsed: selectedTeam === 'TeamD' ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setGroupData(groupTeamMembers());
  }, [selectedTeam]);

  function handleTeamClick(event) {
    let transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.key === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : { ...groupedData }
    );

    setGroupData(transformedGroupData);
    setTeam(event.currentTarget.dataset.team);
  }

  return (
    <main className='container'>
      {groupedEmployees.map(({ key, team, members, collapsed }) => {
        return (
          <div key={key} className='card mt-2' style={{ cursor: 'pointer' }}>
            {/* the data-team attribute came in so clutch */}
            {/* i needed a way to put a team here that setTeam will access */}
            {/* i didn't want to use a string for the id */}
            {/* so i created a custom attribute 'data-team' */}
            {/* it is an HTML feature that allows to store custom data */}
            <h4
              id={key}
              data-team={team}
              className='card-header text-secondary bg-white'
              onClick={handleTeamClick}
            >
              Team Name: {team}
            </h4>
            <div
              id={'collapse_' + team}
              className={collapsed === true ? 'collapse' : ''}
            >
              <hr />
              {members.map((member) => {
                return (
                  <div className='mt-2'>
                    <h5 className='card-title mt-2'>
                      <span className='text-dark'>
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
