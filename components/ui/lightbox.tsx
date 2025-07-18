"use client";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
// Define breakpoints for responsive loading
interface ExtendedSlide extends Slide {
  title?: string;
  description?: string;
}

interface LightBoxProps {
  slides: ExtendedSlide[];
  open: boolean;
  close: () => void;
  index: number;
  setIndex: (index: number) => void;
}

export default function LightBoxComponent({
  slides,
  open,
  close,
  index,
  setIndex,
}: LightBoxProps) {
  return (
    <Lightbox
      slides={slides}
      close={close}
      open={open}
      plugins={[Captions, Zoom]}
      index={index}
      on={{ view: ({ index: current }) => setIndex(current) }}
    />
  );
}
