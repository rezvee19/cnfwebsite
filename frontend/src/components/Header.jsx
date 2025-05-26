import logo from "../assets/projects/project-1.webp";

export const Header = () => {
  return (
    <div className="p-5 flex justify-between">
      <div className="w-20">
        <img src={logo} alt="" />
      </div>
      <h1 className="text-amber-300">K</h1>
    </div>
  );
};
