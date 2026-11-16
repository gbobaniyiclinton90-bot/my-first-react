type ProfilecardProps = {
  name: string;
  role: string;
  imageUrl: string;
  location: string;
};

const ProfileCard = ({ name, role, imageUrl, location }: ProfilecardProps) => {
  return (
    <div className="h-100  w-100 bg-blue-300 text-white font-bold p-2 flex flex-col items-center pt-5">
      <img className="h-50 w-50 rounded-full" src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{role}</p>
      <p>{location}</p>

    
    </div>
  );
};

export default ProfileCard;