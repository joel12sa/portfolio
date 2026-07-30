import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import styles from "./Resume.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export function Resume() {
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
        <span className={styles.number}>05</span>
        CV
      </h2>

      <div className={styles.viewer}>
        <div className={styles.toolbar}>
          <button
            className={styles.btn}
            onClick={() => goTo(page - 1)}
            disabled={page <= 1}
            aria-label="Previous page"
          >
            &larr; Prev
          </button>
          <span className={styles.pageInfo}>
            Page {page} of {numPages ?? "?"}
          </span>
          <button
            className={styles.btn}
            onClick={() => goTo(page + 1)}
            disabled={page >= (numPages ?? 1)}
            aria-label="Next page"
          >
            Next &rarr;
          </button>
        </div>

        <div className={styles.canvas} ref={containerRef}>
          {loading && <p className={styles.loadingText}>Loading PDF...</p>}
          <Document
            file="/CV_Franklin_Joel_Sasig.pdf"
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
        href="/CV_Franklin_Joel_Sasig.pdf"
        download
        className={styles.download}
      >
        Download PDF &darr;
      </a>
    </section>
  );
}
