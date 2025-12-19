import React from 'react'

const SearchText = () => {
    const [searchText, setSearchText] = React.useState('');
    return (

        <div className=' sm:w-full lg:w-[65%]'>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-1.5  rounded-lg  bg-secondary focus:ring-gray-200 outline-none text-1x1"
            />
        </div>
    )
}

export default SearchText