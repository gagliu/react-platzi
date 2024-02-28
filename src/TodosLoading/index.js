import React from 'react';
import './TodosLoading.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function TodosLoading({
}) {
  return (
    <Skeleton className={'todo-skeleton'} count={5}/>
  );
}

export { TodosLoading };