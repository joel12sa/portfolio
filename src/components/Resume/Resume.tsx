import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useLanguage } from "../../i18n/LanguageContext";
import styles from "./Resume.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const base = import.meta.env.BASE_URL;

export function Resume() {
  const { t } = useLanguage();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const goTo = (n: number) => {
    setPage(Math.max(1, Math.min(n, numPages ?? 1)));
  };

  return (
    <section id="resume" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>06</span>
        {t.resume.title}
      </h2>

      <div className={styles.viewer}>
        <div className={styles.toolbar}>
          <button
            className={styles.btn}
            onClick={() => goTo(page - 1)}
            disabled={page <= 1}
            aria-label={t.resume.prev}
          >
            &larr; {t.resume.prev}
          </button>
          <span className={styles.pageInfo}>
            {t.resume.pageInfo(page, numPages ?? 1)}
          </span>
          <button
            className={styles.btn}
            onClick={() => goTo(page + 1)}
            disabled={page >= (numPages ?? 1)}
            aria-label={t.resume.next}
          >
            {t.resume.next} &rarr;
          </button>
        </div>

        <div className={styles.canvas} ref={containerRef}>
          {loading && <p className={styles.loadingText}>{t.resume.loading}</p>}
          <Document
            file={`${base}CV_Franklin_Joel_Sasig.pdf`}
            onLoadSuccess={onLoadSuccess}
            onLoadError={() => setLoading(false)}
            loading={null}
          >
            <Page
              pageNumber={page}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={width}
            />
          </Document>
        </div>
      </div>

      <a
        href={`${base}CV_Franklin_Joel_Sasig.pdf`}
        download
        className={styles.download}
      >
        {t.resume.download}
      </a>
    </section>
  );
}
