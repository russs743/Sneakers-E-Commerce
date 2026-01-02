export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <hr />
      <div className="flex justify-between gap-10 mx-20">
        {/* Kolom 1 */}
        <div className="mt-14 rounded-2xl">
          <h3 className="font-bold italic text-[28px]">SNEAKERS.CO</h3>
        </div>

        {/* Kolom 2 */}
        <div className="p-5 rounded-2xl ml-10">
          <h4 className="text-2xl italic font-bold my-6">Help</h4>
          <ul className="">
            <li>
              <a href="#">How To Buy</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div className="m-5 p-5 rounded-2xl">
          <h4 className="text-2xl mb-4 italic font-bold">Follow Us</h4>
          <div className="flex items-center gap-4">
            <img src="/Img/instagram.png" alt="Instagram" width="25" />
            <img src="/Img/social-media.png" alt="TikTok/Social" width="25" />
            <img src="/Img/facebook.png" alt="Facebook" width="25" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <p>&copy; 2025 SNEAKERS.CO. Copyright Protected.</p>
      </div>
    </footer>
  );
}
