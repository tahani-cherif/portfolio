import ".//footer.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
export default function Footer() {
  const x = window.location.href;
  return (
    <footer>
      <FacebookShareButton url={x}>
        <div style={{ color: "#066" }}>test fb</div>
      </FacebookShareButton>

      <p className="footer">© Copyright 2022 - Tahani Cherif</p>
    </footer>
  );
}
