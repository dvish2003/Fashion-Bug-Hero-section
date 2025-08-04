import BottomBox from "./BottomBox";

export default function BottomGrid() {
  return (
   <div className="grid grid-cols-3 gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg mx-auto z-30 h-[10vh]">
      <BottomBox>🔥 End of Season Sale</BottomBox>
      <BottomBox>👗 Fashion Bug: Up to 50% OFF!</BottomBox>
      <BottomBox>🛍️ Free Shipping on Orders Over Rs. 5000</BottomBox>
    </div>
  )
}
