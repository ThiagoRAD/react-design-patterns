function measureArrayPushPerformance() {
    const iterations = 1000000; // 1 million items to add
    const testArray = [];
    // --- Method 1: Using performance.now() for higher precision ---
    const startTimePerf = performance.now();

    for (let i = 0; i < iterations; i++) {
        testArray.push(i);
    }

    const endTimePerf = performance.now();
    const timeTakenPerf = endTimePerf - startTimePerf;

    console.log(`--- Performance.now() results ---`);
    console.log(`Items added: ${iterations}`);
    console.log(`Time recorded: ${timeTakenPerf.toFixed(4)} milliseconds`);
    // timeTakenPerf is in milliseconds, and performance.now() can have microseconds in the fractional
    console.log(`Total time taken: ${timeTakenPerf.toFixed(4)} milliseconds`);
    console.log(`Average time per item: ${(timeTakenPerf / iterations * 1000).toFixed(4)} microseconds`);


    // --- Method 2: Using console.time() and console.timeEnd() ---
    // Clear the array for the second test
    testArray.length = 0;

    console.log(`\n--- console.time() results ---`);
    console.time("ArrayPushTimer");

    for (let i = 0; i < iterations; i++) {
        testArray.push(i);
    }

    console.timeEnd("ArrayPushTimer");
}

// Run the function to see the results in the console
measureArrayPushPerformance();
