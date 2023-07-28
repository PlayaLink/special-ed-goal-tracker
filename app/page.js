'use client';
import React, { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Input } from './components/foundations';

const dbInstance = collection(database, 'goal');

export default function Home () {
  return (
    <main className="">
      <GoalOperations />
    </main>
  );
}

export function GoalOperations () {
  const [ isInputVisible, setInputVisible ] = useState(false);
  const [ goalsArray, setGoalsArray ] = useState([]);
  const [ goalTitle, setGoalTitle ] = useState('');
  const [ goalDesc, setGoalDesc ] = useState('');
  const addGoalDesc = (value) => {
    setGoalDesc(value);
  };
  const getGoals = () => {
    getDocs(dbInstance).then((data) => {
      setGoalsArray(data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      }));
    });
  };
  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };
  const saveGoal = () => {
    addDoc(dbInstance, {
      goalTitle: goalTitle,
      goalDesc: goalDesc,
      createDate: Timestamp.fromDate(new Date())
    }).then(() => {
      setGoalTitle('');
      setGoalDesc('');
      getGoals();
    });
  };
  const cancelNewGoal = () => {
    setGoalTitle('');
    setGoalDesc('');
    inputToggle();
  }
  useEffect(() => {
    getGoals();
  }, []);
  return (
    <div>
      { /*Goals list*/ }
      { goalsArray.map((goal, i) => {
        const order = i + 1;
        return (
          <div className="p-3 my-3 flex" key={ goal.id }>
            <span className="pr-3 text-xl">{ order }.</span>
            <div>
              <div className="text-xl">{ goal.goalTitle }</div>
              <div dangerouslySetInnerHTML={ { __html: goal.goalDesc } } />
            </div>
          </div>
        );
      }) }
      { /*Add goal*/ }
      { !isInputVisible &&
      (<button onClick={ inputToggle } className="px-3 py-2 bg-black text-white mr-3 mb-3">
          Add goal
        </button>
      ) }
      { isInputVisible ? (
        <form>
          <Input
            className="mb-3"
            type="text"
            placeholder="Enter goal title"
            onChange={ (e) => setGoalTitle(e.target.value) }
            value={ goalTitle } />
          <ReactQuill
            onChange={ addGoalDesc } value={ goalDesc }
            className="w-1/2" />

          <div className="flex">
            <button
              onClick={ saveGoal }
              className="px-3 py-2 bg-black text-white mr-3">
              Save goal
            </button>
            <button
              onClick={ cancelNewGoal }
              className="px-3 py-2 bg-slate-100 mr-3">
              Cancel
            </button>
          </div>
        </form>
      ) : (<></>)
      }
    </div>

  );
}