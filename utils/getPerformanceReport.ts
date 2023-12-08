export const getPerformanceReportInMs = async (fn: () => void | Promise<unknown>): Promise<number> => {
    const start = Date.now();
    await fn();
    const end = Date.now();
    return end - start;
};

export const task = (fn: () => void | Promise<unknown>) => {
    getPerformanceReportInMs(fn).then((executionDuration) => {
        console.log(`Executed within ${executionDuration} ms`);
    });
};
