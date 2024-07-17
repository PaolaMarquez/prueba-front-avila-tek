export default function Gallery() {
  return (
    <div className="max-w-xl lg:pl-0 pr-6 grid gap-3">
      <div className="max-w-96 flex justify-center gap-3 mx-auto">
        <ImageH
          src={
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          }
          position="absolute bottom-0"
        />
        <ImageV
          src={
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          }
        />
      </div>
      <div className="flex gap-3">
        <ImageH
          src={
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          }
        />
        <ImageV
          src={
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          }
        />
        <ImageH
          src={
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          }
        />
      </div>
    </div>
  );
}

interface imageProps {
  position?: string;
  src: string;
}

function ImageH({ position, src }: imageProps) {
  return (
    <div className="relative w-1/2">
      <img
        id="horizontal"
        className={`h-auto max-w-full object-cover object-center ${position}`}
        src={src}
        alt="gallery-photo-horizontal"
      />
    </div>
  );
}
function ImageV({ src }: imageProps) {
  return (
    <div className="relative w-2/6">
      <img
        id="vertical"
        className="h-auto max-w-full object-cover object-center"
        src={src}
        alt="gallery-photo-vertical"
      />
    </div>
  );
}
