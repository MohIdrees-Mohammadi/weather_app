import React from 'react'

const SearchText = () => {
    const [searchText, setSearchText] = React.useState('');
    return (
        <div className='lg:w-[60%]'>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-2 mb-6 rounded-lg focus:ring-1 bg-secondary focus:ring-gray-200 outline-none text-lg"
            />
        </div>
    )
}

export default SearchText