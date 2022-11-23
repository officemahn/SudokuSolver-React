import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { listUsers } from '../graphql/queries'
import Table from './Table'


Amplify.configure(awsconfig)



function LeaderboardComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      const userList = userData.data.listUsers.items;
      setUsers(userList);
    } catch (error) {
      console.log('error on fetching users', error);
    } 
  }

const column = [
    {heading: 'NAME', value: 'name'},
    {heading: 'SCORE', value: 'score'},
    {heading: 'DATE', value: 'createdAt'}
]
  return (
    <div>
        <Table data={users} column={column}/>
    </div>
  )
}

export default LeaderboardComponent
