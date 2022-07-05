export async function sum(events){
    const sum = events.rows.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );
    return sum
}