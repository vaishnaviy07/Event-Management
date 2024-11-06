import { PythonShell } from 'python-shell';

export const predictPopularity = () => {
    return new Promise((resolve, reject) => {
        PythonShell.run('./ml/popularity.py', null, function (err, results) {
            if (err) reject(err);
            resolve(results);
        });
    });
};
