export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center">
      {/* ZeroProof Y2K Logo */}
      <img 
        src="/logo.svg" 
        alt="ZeroProof"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-black y2k-text-gradient">ZeroProof</span>';
        }}
      />
    </a>
  )
}