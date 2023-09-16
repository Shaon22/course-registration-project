
const Course = ({course,handleSelect}) => {
    const {cover,title,short_description,price,credit_hr}=course;
    return (
        <div className='bg-[#FFFFFF] shadow-2xl p-3 rounded-xl'>
            <img className='w-full' src={cover} alt="" />
            <h1 className="text-lg font-semibold text-[#1C1B1B] my-4">{title}</h1>
            <p className="text-xs text-gray-400">{short_description}</p>
            <div className='flex justify-between items-center my-5'>
                <h1 className="text-base text-gray-400 font-medium">$Price: {price}</h1>
                <i class="fa-solid fa-book-open text-gray-300"></i>
                <h1 className="text-base text-gray-400 font-medium">Credit: {credit_hr} hr </h1>
            </div>
            <div className='text-center'>
            <button onClick={()=>handleSelect(course)} className=' bg-[#2F80ED] py-2 w-full text-lg font-semibold text-white rounded-lg'>Select</button>
            </div>
        </div>
    );
};

export default Course;