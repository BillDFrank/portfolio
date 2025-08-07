import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface ModelMetricsProps {
  metrics: {
    accuracy?: number;
    f1Score?: number;
    datasetSize?: number;
  };
}

export const ModelMetrics = ({ metrics }: ModelMetricsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.accuracy && (
            <div className="rounded-lg bg-accent-gray p-4">
              <p className="text-sm text-text-secondary">Accuracy</p>
              <p className="text-2xl font-bold text-text-accent">
                {metrics.accuracy.toFixed(2)}
              </p>
            </div>
          )}
          {metrics.f1Score && (
            <div className="rounded-lg bg-accent-gray p-4">
              <p className="text-sm text-text-secondary">F1 Score</p>
              <p className="text-2xl font-bold text-text-accent">
                {metrics.f1Score.toFixed(2)}
              </p>
            </div>
          )}
          {metrics.datasetSize && (
            <div className="rounded-lg bg-accent-gray p-4">
              <p className="text-sm text-text-secondary">Dataset Size</p>
              <p className="text-2xl font-bold text-text-accent">
                {metrics.datasetSize}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};