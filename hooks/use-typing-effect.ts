import { useEffect, useState } from "react";

interface TypingEffectOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  loop?: boolean;
  showCursor?: boolean;
}

export function useTypingEffect(
  texts: string[],
  options: TypingEffectOptions = {}
) {
  const {
    typingSpeed = 50,
    deletingSpeed = 30,
    delayBetweenTexts = 2000,
    loop = true,
    showCursor = true,
  } = options;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  // Typing effect
  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.slice(0, currentText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenTexts);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentFullText.slice(0, currentText.length - 1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            if (loop || currentTextIndex < texts.length - 1) {
              setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed + Math.random() * 50
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    loop,
  ]);

  return {
    text: currentText,
    cursor: showCursor && cursorVisible ? "|" : "",
    isTyping:
      !isDeleting && currentText.length < texts[currentTextIndex].length,
  };
}
