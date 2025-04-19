export function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }