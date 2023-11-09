
const MyBidRoute = ({bid}) => {
    const { _id, jobTitle, email, minPrice, maxPrice, deadline, category, description } = bid
    return (
        <div>
            hello: {jobTitle}
        </div>
    );
};

export default MyBidRoute;