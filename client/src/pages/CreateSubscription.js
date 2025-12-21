import React from 'react'

const CreateSubscription = () => {
  return (
    <div>
        <form>
            <label htmlFor='subname'>Name</label>
            <input type="text" id="subname" onChange='' />
            <label htmlFor="cost">Cost</label>
            <input type="Number" id="cost" onChange='' />
            <label htmlFor='renewaldate'>Date of Renewal</label>
            <input type="text" id="renewaldate" onChange='' />
            <label htmlFor='tag'>Tag</label>
            <input type="text" id="tag" onChange='' />

        </form>
    </div>
  )
}

export default CreateSubscription