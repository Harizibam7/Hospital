import React from 'react'

export default function DoctorTask() {
  return (
    <div className='doctortask'>
        <span>Task</span>
        <div className='doctor-task-sch'>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
          <div className='doctor-task-li'>
            <input type='checkbox' />
            <h5>This is Task No 1</h5>
          </div>
        </div>
        <div className='doctor-task-add'>
          <input type='text' placeholder='Task here...' className='doctor-task-input'/>
          <button className='doctor-task-btn'>Add</button>
        </div>
    </div>
  )
}
