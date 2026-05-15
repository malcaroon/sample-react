function Header() {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-3 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="/src/assets/buildmate-logo.png"
          alt="BuildMate Logo"
          className="h-10 w-auto"
        />
        <h1 className="text-2xl font-bold tracking-wide">BuildMate Dashboard</h1>
      </div>
      <nav className="flex gap-4 text-sm">
        <a href="#" className="hover:text-orange-400">Home</a>
        <a href="#" className="hover:text-orange-400">Products</a>
        <a href="#" className="hover:text-orange-400">Reports</a>
      </nav>
    </header>
  );
}
export default Header;
